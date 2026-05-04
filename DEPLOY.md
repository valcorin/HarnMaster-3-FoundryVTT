DEPLOY.md

From the FoundryVTT UI
1) Go to Game Systems
2) Click Install System
3) In Manifest URL, paste https://raw.githubusercontent.com/valcorin/HarnMaster-3-FoundryVTT/master/system.json


If the UI install does not work, you can install directly on your server using these instructions

Install on the server directly
1) service foundryvtt stop (as the appropriate account)
2) Change to your Foundry home directory, e.g., /home/foundry (should contain foundrydata/ and foundryvtt/)
3) Run the prep.sh script (modified for your environment)
4) As the account that owns FoundryVTT, run the package_harn.sh script
5) cd /home/foundry/foundrydata/Data/systems/hm3/
6) unzip hm3-1.6.7.zip (answer A to replace all)
7) chown -R foundry:foundry /home/foundry/foundrydata/Data/systems/hm3/packs/  (do this to prevent load db errors)
8) service foundryvtt start (as the appropriate account)
9) Run any script to tweak for your environment (like post_foundry.sh)