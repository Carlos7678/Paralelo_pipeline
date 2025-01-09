pipeline {
    agent none

    stages {
        stage('Setup Agent') {
            agent {
                label 'main' // Cambia el label según corresponda a tu configuración
            }
            steps {
                script {
                    echo 'Descargando y configurando el agente...'
                    bat 'curl.exe -sO http://localhost:8080/jnlpJars/agent.jar'
                    bat 'start /B java -jar agent.jar -url http://localhost:8080/ -secret YOUR_SECRET -name Agent2 -webSocket -workDir "C:/jenkins_agent_workdir"'
                }

                script {
                    echo 'Obteniendo el PID del proceso del agente...'
                    // Llamamos al archivo batch para manejar el comando con el pipe correctamente
                    writeFile file: 'find_agent_pid.bat', text: '''
                    @echo off
                    for /F "tokens=2" %%a in ('tasklist /fi "imagename eq java.exe" /fo csv ^| find "agent.jar"') do echo %%a > agent_pid.txt
                    '''
                    bat 'call find_agent_pid.bat'
                }
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label 'slave1' }
                    steps {
                        echo 'Ejecutando pruebas en Slave 1'
                        // Agrega aquí las tareas específicas para este slave
                    }
                }
                stage('Slave 2') {
                    agent { label 'slave2' }
                    steps {
                        echo 'Ejecutando pruebas en Slave 2'
                        // Agrega aquí las tareas específicas para este slave
                    }
                }
                stage('Slave 3') {
                    agent { label 'slave3' }
                    steps {
                        echo 'Ejecutando pruebas en Slave 3'
                        // Agrega aquí las tareas específicas para este slave
                    }
                }
                stage('Slave 4') {
                    agent { label 'slave4' }
                    steps {
                        echo 'Ejecutando pruebas en Slave 4'
                        // Agrega aquí las tareas específicas para este slave
                    }
                }
                stage('Slave 5') {
                    agent { label 'slave5' }
                    steps {
                        echo 'Ejecutando pruebas en Slave 5'
                        // Agrega aquí las tareas específicas para este slave
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminado. Verificando procesos restantes...'
            bat 'tasklist | findstr agent.jar'
        }

        failure {
            echo 'El pipeline falló. Verifica los logs anteriores para más detalles.'
        }
    }
}