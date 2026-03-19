DEPLOY.md

1) service foundryvtt stop (as the appropriate account)
2) Change to your Foundry home directory, e.g., /home/foundry (should contain foundrydata/ and foundryvtt/)
3) Run the prep.sh script (modified for your environment)
4) As the account that owns FoundryVTT, run the package_harn.sh script
5) cd /home/foundry/foundrydata/Data/systems/hm3/
6) unzip hm3-1.6.6.zip (answer A to replace all)
7) service foundryvtt start (as the appropriate account)