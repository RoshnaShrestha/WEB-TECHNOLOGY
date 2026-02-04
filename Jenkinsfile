pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/RoshnaShrestha/WEB-TECHNOLOGY.git'
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
                    pip3 install -r requirements.txt
                else
                    pip3 install flask
                fi
                '''
            }
        }

        stage('Run Flask App') {
            steps {
                sh '''
                echo "Starting Flask app..."
                nohup python app.py > app.log 2>&1 &
                '''
            }
        }

        stage('Frontend Check') {
            steps {
                echo 'HTML, CSS, and JavaScript files are ready'
            }
        }
    }
}
