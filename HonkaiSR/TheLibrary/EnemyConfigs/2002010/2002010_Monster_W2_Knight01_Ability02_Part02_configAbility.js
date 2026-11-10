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
      "variableName": "FollowTrigger",
      "scope": "TargetEntity"
    },
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "execute": [
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
              "modifier": "<a class=\"gModGreen\" id=\"1416805079\">Monster_W2_Knight01_Formation</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
              "valuePerStack": {
                "Modifier_DefenceAddedRatio": {
                  "displayLines": "UnusedUnderThisBase_8792"
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}