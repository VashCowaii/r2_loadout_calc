const configAbility = {
  "fileName": "DanHengPT_DanHengPT_BE_InsertShield_Part02",
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
        "operator": "Variables[0] (MDF_DisperseNum) || RETURN",
        "displayLines": "MDF_DisperseNum",
        "constants": [],
        "variables": [
          "MDF_DisperseNum"
        ]
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
  "references": []
}