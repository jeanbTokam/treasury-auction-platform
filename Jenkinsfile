pipeline {
    agent any

    stages {

        stage('PROOF') {
            steps {
                sh 'echo "🔥 PIPELINE IS EXECUTING CORRECTLY"'
                sh 'ls -R'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeanbTokam/treasury-auction-platform.git'
            }
        }

        stage('TEST') {
            steps {
                sh 'echo "PIPELINE IS RUNNING FULL BUILD"'
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