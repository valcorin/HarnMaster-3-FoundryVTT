#!/bin/bash

VERSION=$(jq --raw-output .version $HOME/HarnMaster-3-FoundryVTT-master/system.json)
BUILDDIR=$(mktemp -d -t hmk-$VERSION-XXXXXX)
RELEASEDIR=$HOME/Games/fvtt/releases/hm3/$VERSION
HM3FILE=hm3-$VERSION
echo "Begin packaging HarnMaster 3 $VERSION"
# If any prior version of the release exists, remove it
rm -rf $RELEASEDIR

# Create the release directory
mkdir -p $RELEASEDIR

# Copy all releaseable parts of the system
rsync -avz -f "- _source" -f "- scss" -f "- package.json" -f "- package-lock.json" -f "- lib" -f "- packs" -f "- .git" -f "- nogit" -f "- .DS_Store" -f "- .gitignore" -f "- .vscode/*" -f "- *.code-workspace" HarnMaster-3-FoundryVTT-master/* $BUILDDIR

# Build the packs from source files
for i in $(jq -r '.packs[] | [.name, .type] | @csv' HarnMaster-3-FoundryVTT-master/system.json | sed 's/"//g');
do
    SPEC=(${i//,/ })
    PACK=${SPEC[0]}
    TYPE=${SPEC[1]}
    mkdir -p $BUILDDIR/packs/$PACK
    fvtt package pack -n $PACK -v --type System --id hm3 -t $TYPE --in $HOME/HarnMaster-3-FoundryVTT-master/packs/$PACK/_source --out $BUILDDIR/packs/
done

# Create release zip file in release directory
(cd $BUILDDIR; zip -r $RELEASEDIR/$HM3FILE.zip * -x "*/.DS_Store")

# Copy release manifest to release directory
cp $BUILDDIR/system.json $RELEASEDIR/$HM3FILE.json

ln $RELEASEDIR/$HM3FILE.zip $RELEASEDIR/system.zip
ln $RELEASEDIR/$HM3FILE.json $RELEASEDIR/system.json

echo "Finished packaging HarnMaster 3 $VERSION into release directory $RELEASEDIR/hm3-$VERSION.zip"
echo "Copy the zipfile into the data world system, e.g., /home/foundry/foundrydata/Data/systems/hm3/"
