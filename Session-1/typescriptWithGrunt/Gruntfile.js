
module.exports =function(grunt){
    grunt.initConfig({
        ts: {
            default:{
                src:["**/*.ts", "!node_modules/**/*.ts"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("abc",["ts"]); // abc is just a task name
    //suppose you have multiple task and you want to run only the ts task then you can just
    //execute the command grunt and task name
}