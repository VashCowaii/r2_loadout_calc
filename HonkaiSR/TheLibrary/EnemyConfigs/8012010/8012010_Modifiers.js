const configAbility = {
  "fileName": "8012010_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Monster_AML_Minion02_Effect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_AML_Minion02_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedAddedRatio_PerLayer",
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio_PerLayer</span>. Can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "duration": 1,
      "stackLimit": 3,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    }
  ],
  "references": []
}