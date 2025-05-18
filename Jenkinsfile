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
        dir('playwrightTest'){
          sh 'npm install'
        }
        
      }
    }

    stage('Install Playwright browsers') {
      steps {
        dir('playwrightTest'){
        sh 'npx playwright install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        dir('playwrightTest'){
        sh 'npx playwright test --reporter=junit'
        }
      }
    }
  }

  post {
    always {
      junit 'playwrightTest/playwright-report/*.xml' 
    }
  }
}
