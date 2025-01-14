pipeline {
    agent any

    tools { nodejs "node" }

    stages {

        stage('Setup Agents') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        script {
                            echo 'Configurando y ejecutando pruebas en Slave 1...'
                            checkout scmGit(branches: [[name: 'paralelizarNoOrchestrator']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])                            
                            bat 'npm install'
                            bat 'npm run cy:runAgent1'
                        }
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        script {
                            echo 'Configurando y ejecutando pruebas en Slave 2...'
                            checkout scmGit(branches: [[name: 'paralelizarNoOrchestrator']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                            bat 'npm install'
                            bat 'npm run cy:runAgent2'
                        }
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        script {
                            echo 'Configurando y ejecutando pruebas en Slave 3...'
                            checkout scmGit(branches: [[name: 'paralelizarNoOrchestrator']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                            bat 'npm install'
                            bat 'npm run cy:runAgent3'
                        }
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        script {
                            echo 'Configurando y ejecutando pruebas en Slave 4...'
                            checkout scmGit(branches: [[name: 'paralelizarNoOrchestrator']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                            bat 'npm install'
                            bat 'npm run cy:runAgent4'
                        }
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        script {
                            echo 'Configurando y ejecutando pruebas en Slave 5...'
                            checkout scmGit(branches: [[name: 'paralelizarNoOrchestrator']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                            bat 'npm install'
                            bat 'npm run cy:runAgent5'
                        }
                    }
                }
            }
        }
    }
}
