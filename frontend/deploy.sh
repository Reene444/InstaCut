
# build image
docker system prune -a
docker build --no-cache -t frontend:last .

# tag image
docker tag frontend:last reene44444/insta_cut:frontend_test_v11_no_proxy5

#login into Docker Hub
echo "Enter your Docker Hub password:"
docker login -u reene44444

# push image
docker push reene44444/insta_cut:frontend_test_v11_no_proxy5
