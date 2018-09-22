module.exports = grunt => {
  grunt.loadNpmTasks("grunt-aws");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    aws: grunt.file.readJSON("aws-credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyID %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "starkloud-comments",
        region: "us-west-1"
      },
      build: {
        cwd: "./static",
        src: "bundle.js"
      }
    },
    watch: {
      files: ["./static/bundle.js"],
      tasks: ["s3"]
    }
  });
  grunt.registerTask("default", ["s3", "watch"]);
};
