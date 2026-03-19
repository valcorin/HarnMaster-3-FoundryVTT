rm -fr /home/foundry/HarnMaster-3-FoundryVTT-master
sleep 1
mv /tmp/HarnMaster-3-FoundryVTT-master.zip /home/foundry/
unzip /home/foundry/HarnMaster-3-FoundryVTT-master.zip -d /home/foundry
sleep 1
chown -R foundry:foundry /home/foundry/HarnMaster-3-FoundryVTT-master
sleep 1
ls -al
su - foundry
