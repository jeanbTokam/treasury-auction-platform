pipeline {
    agent any

    environment {
        MAVEN_OPTS = "-Xms256m -Xmx512m"
        NODE_OPTIONS = "--max_old_space_size=1024"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('Build Backend (Spring Boot)') {
            steps {
                dir('backend/treasury-api') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend/treasury-ui') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend (Angular)') {
            steps {
                dir('frontend/treasury-ui') {
                    sh 'npm run build'
                }
            }
        }

    }

    post {
        success {
            echo "PIPELINE SUCCESS ✅"
        }

        failure {
            echo "PIPELINE FAILED ❌"
        }
    }
}