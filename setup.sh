rm -rf ./node_modules
rm -rf ./peersocial.io

git clone https://github.com/PeerSocial-io/PeerSocial.io.git ./peersocial.io

cd ./peersocial.io
npm install

cd ../
mv ./peersocial.io/node_modules ./node_modules
cd ./node_modules
ln -s ../peersocial.io ./peersocial.io
cd ../peersocial.io

ln -s ../node_modules ./node_modules

npm run build-dev

# npm install ./peersocial.io

