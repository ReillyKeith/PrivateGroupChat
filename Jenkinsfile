pipeline {
    agent any

    tools {nodejs "NodeJS"}
    properties([pipelineTriggers([cron('0 */4 * * *')])])

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
        stage('Debug Env - 1 Hour Live') {
            steps {
                echo 'Go live for 1 hour....'
                sh 'sleep 3600'
            }
        }
    }
}