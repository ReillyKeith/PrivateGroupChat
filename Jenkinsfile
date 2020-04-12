pipeline {
    agent any
    tools {nodejs "NodeJS"}
    triggers {
        cron('0 * * * *')
    }
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
        stage('Debug Env - 50 Mins Live') {
            steps {
                echo 'Go live for 1 hour....'
                sh 'sleep 3000'
            }
        }
    }
}