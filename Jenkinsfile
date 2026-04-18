pipeline {
    agent any

    tools {
        maven "Maven"
        nodejs "NodeJS"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('Build Backend (Spring Boot)') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend (Angular)') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build --prod'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }

        stage('Deploy Backend (EC2)') {
            steps {
                echo 'Deploying backend to EC2...'
                // later we add SSH deploy here
            }
        }

        stage('Deploy Frontend (S3)') {
            steps {
                echo 'Deploying frontend to S3...'
                // later we add AWS CLI sync here
            }
        }
    }
}