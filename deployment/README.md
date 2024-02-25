## Steps to deploy the application

1. Make sure the project is built and the `dist` directory is created.
2. Update the `angular.json` "outputPath" to `dist` in the `build` options.
3. In the projects root directory, you will run below commands to deploy the
   application.

## Dev environment

`ansible-playbook deploy_dev.yml -i hosts.ini`

## Staging environment

`ansible-playbook deploy_staging.yml -i hosts.ini`

## Prod environment
