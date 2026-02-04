pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your GitHub branch
                checkout scm
                echo 'Successfully pulled code from GitHub.'
            }
        }

        stage('Project Structure Check') {
            steps {
                // This lists your files in the logs so you can see them
                echo 'Listing files in the current workspace:'
                sh 'ls -R'
            }
        }

        stage('Prepare Environment') {
            steps {
                echo 'Setting up virtual environment...'
                // This creates a virtual env and installs requirements if you have them
                sh '''
                    python3 -m venv venv
                    . venv/bin/activate
                    if [ -f requirements.txt ]; then
                        pip install -r requirements.txt
                    else
                        echo "No requirements.txt found, skipping pip install."
                    fi
                '''
            }
        }

        stage('Verify Templates') {
            steps {
                // Checks if your index.html exists in the templates folder
                sh 'test -f templates/index.html && echo "Template found!" || echo "Template MISSING!"'
            }
        }

        stage('Deploy / Run') {
            steps {
                echo 'Your app is ready for deployment.'
                // In a real scenario, you would restart your service here
                // sh 'systemctl restart my_web_app'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Build and Test was successful!'
        }
        failure {
            echo 'Something went wrong. Check the logs above.'
        }
    }