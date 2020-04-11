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
                sh 'npm install --save cors nodemon express socket.io'
                sh 'cd Group-Chat/server/ && npm start &'
            }
        }
        stage('Start Client') {
            steps {
                sh 'npm install --save react react-router socket.io-client react-scroll-to-bottom react-emoji query-string react-dom react-scripts react-router-dom'
                sh 'cd Group-Chat/client/ && npm start &'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Sleep - Debug') {
            steps {
                echo 'Sleep for 24 hours....'
                sh 'sleep 86400'
            }
        }
    }
}