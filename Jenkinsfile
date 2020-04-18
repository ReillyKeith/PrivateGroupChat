pipeline {
    agent any
    tools {nodejs "NodeJS"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm config ls'
            }
        }
        stage('Start Server') {
            steps {
                sh 'cd Group-Chat/server/ && npm install'
                sh 'cd Group-Chat/server/ && npm start &'
            }
        }
        stage('Start Client') {
            steps {
                sh 'cd Group-Chat/client/ && npm install'
                sh 'cd Group-Chat/client/ && npm start &'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Debug Env - 24 Hours Live') {
            steps {
                echo 'Go live for 50 mins....'
                sh 'sleep 86400'
            }
        }
    }
}