const configAbility = {
  "fileName": "3002052_BattleEventAbility_Monster_W3_Junk_PuzzleAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED_11",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Trigger 0-Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-349736416\">Monster_W3_Junk_ExtraWeakness_Imaginary</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__284863540\">Monster_W3_Junk_ExtraWeakness_Quantum</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Quantum"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__862965545\">Monster_W3_Junk_ExtraWeakness_Wind</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-161542417\">Monster_W3_Junk_ExtraWeakness_Thunder</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Thunder"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1631339070\">Monster_W3_Junk_ExtraWeakness_Ice</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__325665547\">Monster_W3_Junk_ExtraWeakness_Fire</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2117131994\">Monster_W3_Junk_ExtraWeakness_Physical</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "action": "Attach",
              "valueList": [
                "Physical"
              ]
            }
          ]
        }
      ]
    }
  ]
}