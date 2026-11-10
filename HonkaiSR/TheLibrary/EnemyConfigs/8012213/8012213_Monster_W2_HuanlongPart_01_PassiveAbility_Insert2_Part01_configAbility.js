const configAbility = {
  "fileName": "8012213_Monster_W2_HuanlongPart_01_PassiveAbility_Insert2_Part01",
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
        "name": "Enemy ID",
        "ID": {
          "displayLines": "SummonerID"
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "displayLines": "{[PassiveSkill02[1]]}"
            },
            "MDF_DamageTakenUpRatio_PerLayer": {
              "displayLines": "{[PassiveSkill02[0]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
          "duration": {
            "displayLines": "{[Skill02[0]]}"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}