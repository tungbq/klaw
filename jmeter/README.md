Create Topics.jmx

Prerequisite 
Install Apache Jmeter
Have Klaw running with an Apache Kafka environment configured
Have a schema Registry Connected to your environment

Set up
To set up Jmeter you will need the following
1) Update the loadConfig.csv with the address of your installation of Klaw.
2) Update the Jmeter script User Defined Variables under "Starting Values Config"
    i) Update the base name of the topic
    ii) Update the environmentId which should be retrievable from the environments page
    iii)  Update the schema registry's environmentId which should be retrievable from the environments page 
    iv) Login as the users you want to create the requests and copy their cookie from the developer console/inspect and copy it into the console do not log this user out
    v) Login as the users you want to approve the requests and copy their cookie from the developer console/inspect and copy it into the console do not log this user out
    vi) Set the number of topics you want created by updating "Starting Values Config"
3) Switch off email notifications if they are enabled and configured as superadmin in the settings section.

