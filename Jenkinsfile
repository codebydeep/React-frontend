pipeline{
    agent any
    
    stages{
        stage("Code"){
            steps {
                git url: "https://github.com/codebydeep/React-frontend.git", branch: "main"
            }
        }
        stage("Build"){
            steps {
                sh "docker build -t react-launch-app ."
            }
        }
        stage("Test"){
            steps {
                echo "Code test ho gaya"
            }
        }
        stage("Push to Docker Hub"){
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    usernameVariable: "dockerHubUser",
                    passwordVariable: "dockerHubPass"
                    )]){
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker image tag react-launch-app ${env.dockerHubUser}/react-launch-app"
                        sh "docker push ${env.dockerHubUser}/react-launch-app:latest"
                }
            }
        }
        stage("Deploy"){
            steps {
                sh "docker compose up -d --build frontend"
            }
        }
    }
}
