const configAbility = {
  "fileName": "Himeko_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__800771191\">ADV_StageAbility_Maze_Himeko</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierFlags": [
        "Debuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1013692489\">Himeko_FireTakenRatio</a>[<span class=\"descriptionNumberColor\">Fire Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Fire DMG taken +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Fire Vulnerability",
      "statusName": "Fire Vulnerability",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">FireVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}