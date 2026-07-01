const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Item_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1112298097\">SilverWolf999_RollItemIndex</a>"
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (CurrentItem) || RETURN",
        "displayLines": "CurrentItem",
        "constants": [],
        "variables": [
          "CurrentItem"
        ]
      },
      "hasBreak": false,
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Item1_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2,
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Item2_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3,
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Item3_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "defaultEvents": []
    }
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"362501008\">_M_SilverWolf999_ItemInsertCheck</a>",
      "addStacksPerTrigger": 1
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}