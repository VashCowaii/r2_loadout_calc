const configAbility = {
  "fileName": "61008_HeliobusActionAbilityFormChange_Revert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "typeOverride": "Buff",
      "silent": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "silent": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "typeOverride": "Other",
      "silent": true
    },
    {
      "name": "Copy Modifier",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "source": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "dispelFilter": "AnyStatus",
      "copyType": "Override",
      "filterList": [
        "Debuff",
        "Buff",
        "Other"
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_MaxHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with HP%",
      "variableName": "_HPRatio",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "setValue": {
        "displayLines": "(_MaxHP * _HPRatio)"
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "multiBase": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-146489802\">Modifier_HeliobusActionAbilityFormChange</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
    },
    {
      "name": "Entity Exit Stage",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "reason": "SelfDestroy"
    },
    {
      "name": "Destroy Battle Entity",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrentStance",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{Summoner of Ability Target(ST)}}"
      },
      "isSet": true,
      "constantValue": {
        "displayLines": "_CurrentStance"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_CurrentStance",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Summoner of Ability Target(ST)}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Summoner of Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Summoner of Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]"
        }
      ],
      "failed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Summoner of Ability Target(ST)}}"
          },
          "popUpText": "Transformation Removed"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}