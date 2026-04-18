pipeline {
    agent any

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
                sh 'echo "Cleaning workspace..."'
                deleteDir()
            }
        }

        stage('Checkout Again (Fresh)') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('Backend Build (Spring Boot)') {
            steps {
                dir('backend/treasury-api') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend/treasury-ui') {
                    sh 'npm install'
                }
            }
        }

        stage('Frontend Build (Angular)') {
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