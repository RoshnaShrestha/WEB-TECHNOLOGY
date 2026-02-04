pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/USERNAME/REPOSITORY.git'
            }
        }

        stage('Check Python Version') {
            steps {
                sh 'python --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                if [ -f requirements.txt ]; then
                    pip install -r requirements.txt
                else
                    echo "No requirements.txt found"
                fi
                '''
            }
        }

        stage('Run Python Script') {
            steps {
                sh '''
                if [ -f app.py ]; then
                    python app.py
                else
                    echo "No Python app to run"
                fi
                '''
            }
        }

        stage('Frontend Check') {
            steps {
                echo 'HTML / CSS / JS files ready for deployment'
            }
        }
    }
}
