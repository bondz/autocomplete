const completionSpec: Fig.Spec = {
  name: "eb",
  description: "AWS Elastic Beanstalk",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new AWS Elastic Beanstalk application",
      args: {
        name: "name",
        description: "The name of the application",
      },
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Forces EB CLI to prompt you to provide a value for every eb init command option",
        },
        {
          name: ["-k", "--keyname"],
          description: "The name of the AWS EC2 key pair",
          args: {
            name: "keyname",
          },
        },
        {
          name: "--modules",
          description: "List of child directories to initialize",
        },
        {
          name: ["-p", "--platform"],
          description: "The platform version to use",
          args: {
            name: "plataform-version",
          },
        },
        {
          name: "--tags",
          description: "List of tags to apply to the application",
          args: {
            name: "key=value",
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the application source bundle from the initialized project directory to the running application",
      options: [
        {
          name: ["-l", "--label"],
          description:
            "Specify a label to use for the version that the EB CLI creates",
          args: {
            name: "version-label",
            description: "The label to use for the version",
          },
        },
        {
          name: "--env-group-suffix",
          description: "Group name to append to the environment name",
          args: {
            name: "groupname",
            description: "The group name to append to the environment name",
          },
        },
        {
          name: ["-m", "--message"],
          description:
            "The description for the application version, enclosed in double quotation marks",
          args: {
            name: "version-description",
            description: "Description for the application version",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
