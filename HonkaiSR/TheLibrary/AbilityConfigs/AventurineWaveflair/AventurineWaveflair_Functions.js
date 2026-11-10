const configAbility = {
  "fileName": "AventurineWaveflair_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-856938281\">AventurineW_SpecialAttackExtraEnergyPoint</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_SpecialAttackEnergyPointTriggerCount",
            "compareType": "<",
            "value2": {
              "displayLines": "6"
            },
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SpecialAttackEnergyPointTriggerCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1708522086\">AventurineW_CritDamage_PointB3_AfterTeamMateCastAbility</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
              "duration": {
                "displayLines": "3"
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.48"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
              "stackLimit": {
                "displayLines": "_MaxEnergyPoint"
              },
              "addStacksPerTrigger": {
                "displayLines": "2"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}