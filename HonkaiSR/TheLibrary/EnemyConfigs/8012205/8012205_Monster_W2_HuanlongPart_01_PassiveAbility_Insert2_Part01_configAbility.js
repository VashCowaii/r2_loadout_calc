const configAbility = {
  "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert2_Part01",
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
          "operator": "Variables[0] (SummonerID) || RETURN",
          "displayLines": "SummonerID",
          "constants": [],
          "variables": [
            "SummonerID"
          ]
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
              "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
              "displayLines": "UnusedUnderThisBase_214",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_214"
              ]
            },
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
              "displayLines": "UnusedUnderThisBase_215",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_215"
              ]
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
            "operator": "Variables[0] (UnusedUnderThisBase_196) || RETURN",
            "displayLines": "UnusedUnderThisBase_196",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_196"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}