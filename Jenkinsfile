pipeline {
    agent any

    tools {
        maven 'Maven'
        nodejs 'NodeJS'
    }

    environment {
        MAVEN_OPTS = "-Xms256m -Xmx512m"
        NODE_OPTIONS = "--max_old_space_size=1024"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('Clean Workspace') {
            steps {
                echo "Cleaning workspace..."
                deleteDir()
            }
        }

        stage('Checkout Fresh Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('Backend Build (Spring Boot)') {
            steps {
                dir('backend/treasury-api') {
                    echo "Building Spring Boot backend..."
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend/treasury-ui') {
                    echo "Installing Angular dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend (Angular)') {
            steps {
                dir('frontend/treasury-ui') {
                    echo "Building Angular app..."
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo "PIPELINE SUCCESS ✅ Backend + Frontend built successfully"
        }

        failure {
            echo "PIPELINE FAILED ❌ Check logs"
        }
    }
}