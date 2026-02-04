pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Code pulled successfully.'
            }
        }

        stage('List Files') {
            steps {
                // This will show your files in the Jenkins console
                sh 'ls -R'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add build commands here if needed
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed. Check for syntax errors.'
        }
    }
}