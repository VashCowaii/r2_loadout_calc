const configAbility = {
  "fileName": "Castorice_LocalPlayer_Castorice_TechniqueUsage_Out",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Castorice_OnInput_Flag",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Adventure Combat Initiator(Latest)}}"
        }
      },
      "passed": [
        "Submit Technique Use",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 140704
        }
      ]
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}