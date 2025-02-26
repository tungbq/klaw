import { SetupServerApi } from "msw/node";
import { rest } from "msw";
import { createMockEnvironmentDTO } from "src/domain/environment/environment-test-helper";
import { getHTTPBaseAPIUrl } from "src/config";
import { KlawApiResponse } from "types/utils";
import { operations } from "types/api";

type MockApi<T extends keyof operations> = {
  mswInstance: SetupServerApi;
  response: {
    status?: number;
    data: KlawApiResponse<T> | { message: string };
  };
};

function mockgetAllEnvironmentsForTopicAndAcl({
  mswInstance,
  response,
}: MockApi<"getEnvs">) {
  const url = `${getHTTPBaseAPIUrl()}/getEnvs`;
  mswInstance.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.status(response.status ?? 200), ctx.json(response.data));
    })
  );
}

function mockgetEnvironmentsForTopicRequest({
  mswInstance,
  response,
}: MockApi<"getEnvsBaseCluster">) {
  const url = `${getHTTPBaseAPIUrl()}/getEnvsBaseCluster`;
  mswInstance.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.status(response.status ?? 200), ctx.json(response.data));
    })
  );
}

const mockedEnvironmentResponse = [
  createMockEnvironmentDTO({ name: "DEV", id: "1" }),
  createMockEnvironmentDTO({ name: "TST", id: "2" }),
];

interface GetClusterInfoFromEnvRequestArgs {
  mswInstance: SetupServerApi;
  response: KlawApiResponse<"getClusterInfoFromEnv">;
}

function mockGetClusterInfoFromEnv({
  mswInstance,
  response,
}: GetClusterInfoFromEnvRequestArgs) {
  const url = `${getHTTPBaseAPIUrl()}/getClusterInfoFromEnv`;

  mswInstance.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    })
  );
}

export {
  mockgetAllEnvironmentsForTopicAndAcl,
  mockgetEnvironmentsForTopicRequest,
  mockedEnvironmentResponse,
  mockGetClusterInfoFromEnv,
};
