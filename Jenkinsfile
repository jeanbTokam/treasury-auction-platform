pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('PROOF') {
            steps {
                sh 'echo "🔥 PIPELINE IS RUNNING FULL CI/CD"'
            }
        }

        stage('Build Backend (Spring Boot)') {
            steps {
                dir('backend/treasury-api') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend (Angular)') {
            steps {
                dir('frontend/treasury-ui') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESS ✅'
        }
        failure {
            echo 'BUILD FAILED ❌'
        }
    }
}