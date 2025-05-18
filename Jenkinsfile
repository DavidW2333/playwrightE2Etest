pipeline {
  agent {
    node {
      label 'built-in'
    }
  }

  tools {
    nodejs 'nodejs' 
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/DavidW2333/playwrightE2Etest.git'

      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test --reporter=junit'
      }
    }
  }

  post {
    always {
      junit 'playwright-report/*.xml' 
    }
  }
}
