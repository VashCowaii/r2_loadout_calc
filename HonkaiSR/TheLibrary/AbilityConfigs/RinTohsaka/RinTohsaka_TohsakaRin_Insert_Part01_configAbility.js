const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Freeform Tohsaka Style"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "TohsakaRin_Insert_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Rin: Archer}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "TohsakaRin_Insert_Part02_Archer"
        }
      ]
    }
  ],
  "onAbort": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}