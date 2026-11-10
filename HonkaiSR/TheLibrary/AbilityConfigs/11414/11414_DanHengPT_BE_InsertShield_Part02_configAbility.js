const configAbility = {
  "fileName": "11414_DanHengPT_BE_InsertShield_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "dispelCount": {
        "displayLines": "MDF_DisperseNum"
      },
      "dispelOrder": "LastAdded"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{DHPT}}"
      },
      "ability": "DanHengPT_BE_AddShield"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}