pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'sudo yum install nodejs'
            }
        }
        stage('Start Server') {
            steps {
                sh 'cd Group-Chat/server/ && npm start'
            }
        }
        stage('Start Client') {
            steps {
                sh 'cd Group-Chat/client/ && npm start'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}