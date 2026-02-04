const configAbility = {
  "fileName": "2002010_Monster_W2_Knight01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "FollowTrigger"
    },
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Enemy ID",
            "ID": 2002010,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Cloud Knights Patroller"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Knight01_Formation[<span class=\"descriptionNumberColor\">undefined</span>]",
              "valuePerStack": {
                "Modifier_DefenceAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_65) || RETURN",
                  "displayLines": "UnusedUnderThisBase_65",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_65"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}