pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/nitinkumarn/Naukri.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx playwright test --reporter=html'
            }
        }
        stage('Publish Report') {
            steps {
                archiveArtifacts artifacts: '**/playwright-report/*.html', fingerprint: true
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
    }
}
