pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.50.0-noble'
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
          sh 'npm ci' //The short version Use npm install to update and install your dependencies. Use npm ci to only install your dependencies. Always use npm ci in your pipelines/actions, never npm install
        }
        
      }
    }

    stage('Install Playwright browsers') {
      steps {
        dir('playwrightTest'){
        sh 'npx playwright install --with-deps'
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
