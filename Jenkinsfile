pipeline {
  agent any

  tools {
    nodejs 'nodejs' 
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/DavidW2333/playwrightE2Etest.git'

      }
    }

    stage('Install Playwright System Dependencies') {
      steps {
        sh '''
          apt-get update && apt-get install -y --no-install-recommends \
          libnss3 \
          libatk1.0-0 \
          libatk-bridge2.0-0 \
          libcups2 \
          libdrm-amdgpu1 \
          libxcomposite1 \
          libxdamage1 \
          libxrandr2 \
          libgbm-dev \
          libasound2 \
          libdbus-glib-1-2 \
          libgdk-pixbuf2.0-0 \
          libgtk-3-0 \
          libjpeg-turbo8 \
          libsecret-1-0 \
          libxkbcommon0 \
          libxslt1.1 \
          libxss1 \
          libgconf-2-4 \
          libevent-2.1-7 \
          libjson-c3 \
          libsqlite3-0 \
          libxml2 \
          libxtst6 \
          xvfb # XVFB is for running headless browsers in a virtual display
        '''
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
        //sh 'npx playwright test --reporter=junit'
        sh 'xvfb-run -a npx playwright test --reporter=junit'
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
