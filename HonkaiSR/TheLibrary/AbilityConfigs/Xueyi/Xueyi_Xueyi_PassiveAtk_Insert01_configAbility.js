const configAbility = {
  "fileName": "Xueyi_Xueyi_PassiveAtk_Insert01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Xueyi_Attack"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"461375302\">Xueyi_BP_Passive02</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Karmic Perpetuation"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Xueyi_PassiveAtk_Insert02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "conditions": {
          "name": "Enemies Still Alive",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "includeUnselectable": true
        }
      },
      "passed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_Xueyi_Attack"
    }
  ],
  "onAbort": [
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_Xueyi_Attack"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}