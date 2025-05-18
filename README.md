e2e testing and jenkins CI

docker installation steps:

docker network create jenkins
docker volume create jenkins_home
docker run \
>   --name jenkins-FirstProject \
>   --restart=unless-stopped \
>   --detach \
>   --network jenkins \
>   -p 8080:8080 -p 50000:50000 \
>   -v jenkins_home:/var/jenkins_home \
>   -v /var/run/docker.sock:/var/run/docker.sock \
>   jenkins/jenkins:lts

#get jenkins password
#The initial admin password is stored in /var/jenkins_home/secrets/initialAdminPassword within the container.
#You can print this password in your terminal by running: docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword


Jenkins installation and step up steps:

