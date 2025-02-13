pipeline {
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/nitinkumarn/Naukri.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test --reporter=html'
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
