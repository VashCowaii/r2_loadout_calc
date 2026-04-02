const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Insert2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
      "paramSequence2": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
          "duration": 2,
          "valuePerStack": {
            "MDF_PropertyValue": 0.2
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Delay",
              "multiAdd": 1
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"110873612\">Silwolf_BPAbility_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Extra Ice Weakness</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}